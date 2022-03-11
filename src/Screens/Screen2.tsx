import { useLocation } from "react-router-dom";

interface ILocationState {
  ar: number[];
}

const Screen2 = () => {
  // --- it is a bit confusing but it is working
  let location = useLocation<ILocationState>();
  let elems;


  if(location.state){
    const { ar } = location.state;
    elems = ar.map((it: number, i: number) => <p key={i}>{it}</p>);
  }

  return (
    <div>
      Screen2
      <p>Array using useLocation</p>
      {elems}
    </div>
  );
};

export default Screen2;
