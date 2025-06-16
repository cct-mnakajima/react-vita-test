import { useEffect, useState, type MouseEventHandler } from 'react'
import { Button } from '@material-tailwind/react'

// 表示するデータ型
export type TitleData = {
  id: number;
  title: string;
  description: string;
}

// 外部からもらうプロパティ
type TitleDispComponentProps = {
  fontSize?:string;
  fontColor?:string;
  children?:any;
  titles?:TitleData[];
}

function TitleDispComponent(props:TitleDispComponentProps) {
  const [titleDispType, setTitleDispType] = useState(0)
  const [titles, setTitles] = useState<TitleData[]|undefined>([{
    id:0,
    title:"",
    description:""
  }])

  const fontSize = props.fontSize ? props.fontSize : 'text-8xl'
  const fontColor = props.fontColor ? props.fontColor : 'text-red-800'

  const handleTitleChange: MouseEventHandler<HTMLButtonElement> = (event) => {
    if(!titles)
      return

    let next = titleDispType + 1
    // 最大数でクリップ
    if(next > titles.length-1){
      next = 0
    }
    setTitleDispType(next)
  }

  useEffect(()=>{
    
    setTitles(props.titles)
  },[props.titles])
  
  const fnTitleDisp = function titleDispFunction() {
    if(!titles)
      return

    // データが無い場合は空を返す
    if(titles[titleDispType].title == "") {
      return <p>データなし</p>
    }

    return (
      <p className={fontSize + ' ' + fontColor}>タイトル{titles[titleDispType].title}</p>
    )
  }


  return (
    <div className='m-2 mb-10 bg-lime-100'>
      <div className='ml-2'>
        <Button onClick={handleTitleChange}>タイトルチェンジ</Button>
      </div>  
      <p>外から入力された要素:</p>
      <div>{props.children}</div>

      {/* タイトル */}
      {fnTitleDisp()}
    </div>
  )
}

export default TitleDispComponent
