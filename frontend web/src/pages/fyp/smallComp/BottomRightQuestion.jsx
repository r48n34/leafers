import Fab from '@mui/material/Fab';
import { BsQuestionLg } from "react-icons/bs";

function BottomRightQuestion({ popFunc }){
    return (
    <div className='fixed-bottom' style={{ marginBottom:'20px', marginRight:'10px',  textAlign:"right" }}>
     <Fab color="primary" aria-label="add" onClick={ () => popFunc() }>
       <BsQuestionLg />
     </Fab>
    </div>
    )
}

export default BottomRightQuestion
