import { useHistory } from 'react-router-dom';
import { auth, firebase } from '../services/firebase';
import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  
  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider();
    
    provider.addScope('profile');
    provider.addScope('email');
    
    console.log(
      'provider 1 ',
       provider
    );
    


    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    })
    //history.push('/rooms/new');
  }


  return (
    <div id="page-auth">
      <aside>
      <img src={IllustrationImg} alt="Simbolizando perguntas e respostas"/>
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas de sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input
            type="text"
            placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>

  )
}