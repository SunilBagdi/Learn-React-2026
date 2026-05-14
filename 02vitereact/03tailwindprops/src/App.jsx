import { useState } from 'react'

import Cart from './component/cart';
import PasswordGenerater from './component/passwordGenerater';

function App() {
  const [count, setCount] = useState(0)
  
  let myobj = {
    lake: "Anasagar Lake Ajmer"
  }
  let myArr = [1,2,3]

  return (
    <>
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg/8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Leslie Alexander</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Michael Foster</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Co-Founder / CTO</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Dries Vincent</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Business Relations</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Lindsay Walton</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Front-end Developer</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Courtney Henry</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Designer</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-white">Tom Cook</h3>
                <p className="text-sm/6 font-semibold text-indigo-400">Director of Product</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Cart channel="chaiorcode" btnText="Start to Learn" lakeName="Anasagar Lake Ajmer" detailes={myobj} newArr = {myArr}/> 
    <PasswordGenerater />
    </>
  )
}

export default App
