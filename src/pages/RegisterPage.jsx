import './RegisterPage.css';

const RegisterPage = (props) => {


    function onClick(){
        props.setIsAvtorizate(true)
        props.isAvtorizate = true
        console.log("ooooooooonnnnnnnn")
    }


    return (
    <div className='first_c'>
    <div className="form-container" action="">
        <form className="register_form">
        <h2>Регистрация</h2>

        <div className='form-field'>
            <label for="email">email</label>
            <input placeholder="введите email"></input>
        </div>

        <div className='form-field'>
            <label for="email">пароль</label>
            <input placeholder="введите пароль"></input>
        </div>
        
        <div className='form-field'>
            <input placeholder="введите пароль повторно"></input>
        </div>
            
            
        <button className='register_btn' onClick={onClick}>отправить</button>
          
        </form>
    </div>
    </div>
    );
  }
  
  export default RegisterPage;