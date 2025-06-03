import { useEffect, useState, type ChangeEventHandler, type FormEventHandler } from 'react'
import './App.css'
import { Button, Input, Select, Typography } from '@material-tailwind/react'


function App() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [selectValue,setSelectValue] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(email)
    console.log(password)
    console.log(selectValue)
  }


  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  return (
    <>
      <p className='app-title'>タイトル</p>

      <div className='app-area'>
        <div className='parent-area'>
          <p className='child-area'>Hello world!!!</p>
          <p className='child-area'>ABC ABC</p>

          <p className='child-box'>child box item</p>

        </div>
      </div>


      <div className='parent-area-vw'>
          <p className='child-area-vw'>child box item vw</p>
          <p className='child-area-per'>child box item per</p>

      </div>

      <div className='parent-area v2'>
        <a href="https://google.com">Googleへのリンク</a>
      </div>


      <a href="https://google.com">
        <div className='parent-area v2'>
          Googleへのリンク2
        </div>
      </a>

      <h1 >h1■■■■■■■■■</h1>
      <img src='grapefruit-slice.jpg' />

      {/* テーブル */}
      <table className='m-10'>
        <thead >
          <tr>
            <th scope="col" className='bg-red-300'>Person</th>
            <th scope="col" className='bg-red-100'>Most interest in</th>
            <th scope="col" className='bg-red-300'>Age</th>
          </tr>
        </thead>        
        <tbody>
            <tr>
              <th scope="row">Chris</th>
              <td>HTML tables</td>
              <td>22</td>
            </tr>
            <tr>
              <th scope="row">Dennis</th>
              <td>Web accessibility</td>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">Sarah</th>
              <td>JavaScript frameworks</td>
              <td>29</td>
            </tr>
            <tr>
              <th scope="row">Karen</th>
              <td>Web performance</td>
              <td>36</td>
            </tr>
          </tbody>
      </table>


      {/* flex box を利用した左右割付*/}
      <div className='flex justify-between  m-10 bg-blue-100 '>
        <p className='bg-green-300 m-1 P-1'>item 1</p>
        <div className='flex'>
          <p className='bg-green-300 m-1 P-1'>item 2</p>
          <p className='bg-green-300 m-1 P-1'>item 3</p>
        </div>
      </div>

      {/* グリッドシステム */}
      <div className="grid grid-cols-3">
        <div className="h-20 w-20 bg-red-100">01</div>
        <div className="h-20 w-20 bg-blue-100">02</div>
        <div className="h-20 w-20 bg-green-100">03</div>
        <div className="h-20 w-20 bg-purple-100">04</div>
        <div className="h-20 w-20 bg-red-100">05</div>
        <div className="h-20 w-20 bg-blue-100">06</div>
        <div className="h-20 w-20 bg-green-100">07</div>
      </div>

      {/* インプット */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-red-50 p-4 m-4">
        <Typography className='text-center'>入力フォーム</Typography>

        <div className="w-72 space-y-1 m-10">
          <Typography
            as="label"
            htmlFor="email"
            type="small"
            color="default"
            className="font-semibold"
          >
            Email
          </Typography>
          <Input id="email" type="email" placeholder="someone@example.com" onChange={handleEmail} className='bg-blue-50'/>
        </div>      
        <div className="w-72 space-y-1 m-10">
          <Typography
            as="label"
            htmlFor="password"
            type="small"
            color="default"
            className="font-semibold"
          >
            パスワード
          </Typography>
          <Input id="password" type="password" placeholder="パスワードを設定してください" onChange={handlePassword} className='bg-blue-50'/>
        </div>


        <Select value={selectValue} onValueChange={(val) => setSelectValue(val)}>
          <Select.Trigger className="w-72" placeholder="好きな食べ物" />
          <Select.List>
            <Select.Option value="カレー">
              カレー
            </Select.Option>
            <Select.Option value="寿司">
              寿司
            </Select.Option>
            <Select.Option value="ラーメン">
              ラーメン
            </Select.Option>
          </Select.List>
        </Select>

        <div className='flex justify-end mr-4'>
          <Button type="submit" >送信</Button>
        </div>
      </form>


      {/* センタリング系 */}
      <div className='h-50 w-50 bg-yellow-100 m-4 p-4 flex justify-center items-center'>
        <p className='w-10 h-10'>AAA</p>
      </div>

      {/* position absolute */}
      <div className='h-50 w-50 bg-orange-100 m-4 p-4  relative'>
        <p >relative</p>
        <p className='h-8 w-20 bg-blue-100  -left-2 -top-2 absolute text-center border-1 rounded-xl'>absolute</p>
      </div>

      {/* display */}
      <div className='m-4 p-4 bg-gray-100'>
        <Typography>display</Typography>
        <div className='h-50 w-50 bg-black-100'>
          <p className='hidden'>hidden</p>
          <p className='inline bg-blue-100'>inline</p>
          <p className='inline-block bg-orange-100 h-20'>inline-block</p>
          <p className='block bg-green-100'>block</p>
        </div>
      </div>
      
      
      <div className='m-4 p-4'>
        <Typography>z-index</Typography>
        <div className='h-50 w-100 bg-orange-100 flex justify-center -space-x-3 p-8'>
          <div className="z-40 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">05</div>
          <div className="z-30 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">04</div>
          <div className="z-20 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">03</div>
          <div className="z-10 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">02</div>
          <div className="z-0 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">01</div>
        </div>
      </div>
    
      <div className='m-4 p-4'>
        <Typography>hover</Typography>
        <div className='h-50 w-50 bg-lime-800  hover:bg-lime-200'>
        </div>
      </div>
    </>
  )
}

export default App
