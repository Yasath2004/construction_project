import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { useForm } from "react-hook-form"

const Login = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {console.log(data)}
  return (
 <>
 <Header/>
        <main>
            <div className='container my-5 d-flex justify-content-center'>
                <div className='login-form my-5'>
                    <div className='card border-0 shadow'>
                        <div className='card-body p-4'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h4 className='mb-3'>LOGIN HERE</h4>

                                <div className='mb-3'>
                                    <label htmlFor=''className='form-label'>Email</label>
                                    <input 
                                        {...register('email',{
                                            required: "this field is requird"
                                        })}
                                     type='text' placeholder='Email' 
                                     className={`form-control ${errors.email && 'is-invalide'}`}/>
                                    {
                                        errors.email&&<p className='invalid-feedback'>{errors.email?.message} </p>
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor=''className='form-label'>Password</label>
                                    <input
                                        {...register('password',{
                                            required: "this field is requird"
                                        })}
                                    
                                    type='Password' placeholder='Password' 
                                    className={`form-control ${errors.email && 'is-invalide'}`}/>
                                    {
                                        errors.password&&<p className='invalid-feedback'>{errors.password?.message} </p>
                                    }
                                </div>

                                <button type='submit' className='btn btn-primary'>Login</button>

                            </form>

                        </div>
                    </div>

                </div>
                
            </div>
        </main>
 <Footer/>
 </>
  )
}

export default Login
