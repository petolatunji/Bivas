import React from 'react'
import { GiChicken } from 'react-icons/gi'
import { FaPiggyBank } from 'react-icons/fa'
import { GiCirclingFish } from 'react-icons/gi'
import { GiFarmer } from 'react-icons/gi'
import { RiOilLine } from 'react-icons/ri'
import { GiWoodPile } from 'react-icons/gi'

const Flip = () => {
  return (
    <div className='mb-[100px] md:flex md:flex-wrap gap-16 '>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Poultry
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiChicken className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Poultry</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Piggery
            </h1>
          </div>
          <div className='flip-card-back'>
            <FaPiggyBank className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Piggery</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Fishery
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiCirclingFish className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Fishery</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[80px] relative text-2xl font-bold text-white'>
              Yam Plantation
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiFarmer className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Yam Plantation</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Edible Oil
            </h1>
          </div>
          <div className='flip-card-back'>
            <RiOilLine className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Edible oil</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[80px] relative text-2xl font-bold text-white'>
              Wood Products
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiWoodPile className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Wood Products</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flip
