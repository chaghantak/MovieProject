import * as d3 from 'd3';//기본셋팅
import {useEffect,useRef,useState} from 'react';
export default function Chart(){

    const [data,setData] = useState([10,20,40,30]);//기본셋팅
    const svgRef = useRef();//기본셋팅

    useEffect(()=>{
        const svg = d3.select(svgRef.current); //기본셋팅
        
        const Line = d3.line()
                       .x((value, index)=> index* 50)
                       .y((value)=> 200 -value);
                        
         svg.selectAll("path")
            .data([data]) //데이터와 바인딩 해줘
            .join( //svg요소를 '신규생성' / 업데이트 / '지우기' 해야 할 경우 한꺼번에 관리
                (enter)=>enter.append("path"))  //(path가없으면 신규생성)
            .attr("d",(value)=>Line(value))
            .attr("fill","none")
            .attr("stroke","red");
    },[data])

            const increaseData = ()=> {
                setData(data.map((value)=> value + 5))
            }

            const decreaseData = ()=> {
                setData(data.map((value)=> value - 5))
            }
return(
    <div>
        <svg ref={svgRef} width="200" height="200" viewBox="0 0 200 200">
            
        </svg>
        <button onClick={increaseData}>+5</button>
        <button onClick={decreaseData}>-5</button>
    </div>
)
}