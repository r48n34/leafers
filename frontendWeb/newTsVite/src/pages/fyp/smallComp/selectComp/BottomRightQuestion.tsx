import { Button } from '@mantine/core';
import { BsQuestionLg } from "react-icons/bs";

function BottomRightQuestion({ popFunc }: { popFunc: Function }) {
  return (
    <div className='fixed-bottom' style={{ marginBottom: '20px', marginRight: '10px', textAlign: "right" }}>
      <Button color="violet" radius="xl" onClick={() => popFunc()}>
        <BsQuestionLg />
      </Button >
    </div>
  )
}

export default BottomRightQuestion
