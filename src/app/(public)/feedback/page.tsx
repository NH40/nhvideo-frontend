import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О нас',
  description: 'Узнайте больше о нашей команде и нашей миссии'
}

export default function Page() {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
          Обо мне | разработчик NH Video
        </h2>

        <div className='space-y-6 text-gray-700'>
          <p className='text-lg leading-relaxed'>
            Я начинающий разработчик 17 лет который тестирует свои навыки в создание веб
            приложений и выполнении сложных задач, с создание сложного и структурного
            кода, этот проект занял много времени и трудов.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Наш опыт</h3>
              <p>
                Я занимаюсь разработкой уже 3 код, начинал с языка Python после чего
                пересел на более низкие языки программирование пока не встретил PHP а
                далее JavaScript а дальше я просто уходил в глубь айсберга веб разработки
                попутно разрабатывая множество веб приложений и сайтов.
              </p>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Наши услуги</h3>
              <ul className='list-disc list-inside space-y-2'>
                <li>Создание сайтов</li>
                <li>Разработка приложений</li>
                <li>Разработка веб приложений</li>
                <li>Разработка моб. приложений</li>
                <li>Создание продвинутого сервера</li>
              </ul>
            </div>
          </div>

          <div className='text-center mt-8'>
            <p className='text-lg font-medium text-gray-900'>
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <p className='text-indigo-600 mt-2'>Email: nevedomyj4@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
