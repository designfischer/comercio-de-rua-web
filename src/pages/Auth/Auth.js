import React, { useRef, useState } from "react";
import api from '../../services/api'

import './style.css'

function Auth() {

  const [isLogin, setIsLogin] = useState(false)

  const emailEl = useRef()
  const passwordEl = useRef()
  const nameEl = useRef()
  const phoneEl = useRef()

  async function submitHandler (e) {
    e.preventDefault()  
    if (isLogin) {
      const email = emailEl.current.value
      const password = passwordEl.current.value
      const name = nameEl.current.value
      const phone = phoneEl.current.value   
      const requestBody = {
        "query" : `mutation {createUser(userInput: {name:"${name}", email:"${email}", password:"${password}", phone:"${phone}"}){name _id}}`
      }
        try {
          const sessionData = await api.post('graphql', requestBody)          
          console.log(sessionData.data)
          alert('Cadastrado com sucesso')
          setIsLogin(!isLogin)
        } catch(err) {
          alert('Falha no login, tente novamente')
        }
    } else {
      const email = emailEl.current.value
      const password = passwordEl.current.value
      const requestBody = {
        "query" : `query {login(email:"${email}", password:"${password}"){userId token tokenExpiration}}`
      }      
        try {
          const sessionData = await api.post('graphql', requestBody)
          console.log(sessionData.data)
          alert(email)
        } catch(err) {
          alert('Falha no login, tente novamente')
        }
    }
  }

  function switchHandler() {
    setIsLogin(!isLogin)    
  }

  return ( 
    <>
    { isLogin ? 
      <form className="auth-form" onSubmit={submitHandler}>      
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailEl} required/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} required/>
      </div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" ref={nameEl} required/>
      </div>
      <div className="form-control">
        <label htmlFor="name">Phone</label>
        <input type="text" id="phone" ref={phoneEl} required/>
      </div>
      <div className="form-actions">        
        <button type="submit"><b>CADASTRAR-SE</b></button>
        <button type="button" onClick={switchHandler}>{isLogin ? 'ENTRAR' : 'NOVO USUÁRIO'}</button>
      </div>
    </form>
    : 
    <form className="auth-form" onSubmit={submitHandler}>      
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailEl} required/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} required/>
      </div>      
      <div className="form-actions">        
        <button type="submit"><b>ENTRAR</b></button>
        <button type="button" onClick={switchHandler}>{isLogin ? 'ENTRAR' : 'NOVO USUÁRIO'}</button>
      </div>
    </form>}    
    </>  
  );
}

export default Auth;
