import {Spinner} from "react-bootstrap";
import { motion } from 'framer-motion';

function LoadingPage(){
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1  }}
      exit={{ opacity: 0  }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex justify-content-center" style={{marginTop:"50vh"}}>
        <div style={{ textAlign: "center"}}>
          <Spinner animation="border" role="status" size="lg"></Spinner>
          <br/><br/>
          <h3><b>Loading...</b></h3>
        </div>
      </div>
    </motion.div>
    )
}

export default LoadingPage