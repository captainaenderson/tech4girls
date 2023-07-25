import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';



function QuizStartPage() {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/profile/profile/${id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen des Profils', error);
      });
  }, []);

  if (!profile) {
    return <div>Ich sehe gar kein Profil</div>;
  }

  const { JoinedClass, AttendedClass } = profile;

  // JSX für die Auswahlmöglichkeiten basierend auf den Profilabfrage-Antworten
  const renderQuizOptions = () => {
    if (JoinedClass === true) {
      if (AttendedClass === 'HTML') {
        return (
          <div>
            <h2>Auswahlmöglichkeiten</h2>
            <div>
            <p>HTML</p>
            <button>Zum Quiz</button>
            </div>
            <div>
            <p>CSS</p>
            <button>Zum Quiz</button>
            </div>
          </div>
        );
      } else if (AttendedClass === 'CSS') {
        return (
          <div>
            <h2>Auswahlmöglichkeiten</h2>
            <div>
            <p>CSS</p>
            <button>Zum Quiz</button>
            </div>
            <div>
            <p>Codingspiele 1</p>
            <button>Zum Quiz</button>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div>
      {renderQuizOptions()}
    </div>
  );
};

export default QuizStartPage;