import './RegisterPage.css';

const RegisterPage = () => {

    // function onClick(){
    //     setIsAvtorizate(true)
    // }

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
            
            
            <button className='register_btn' >отправить</button>
          
        </form>
    </div>
    </div>
    );
  }
  
  export default RegisterPage;