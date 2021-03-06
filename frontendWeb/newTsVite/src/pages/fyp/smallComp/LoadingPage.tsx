import { Loader } from '@mantine/core';
import { motion } from 'framer-motion';
import { useT } from 'talkr';

function LoadingPage() {
    const { T } = useT();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="d-flex justify-content-center" style={{ marginTop: "50vh" }}>
                <div style={{ textAlign: "center" }}>
                    <Loader color="indigo" variant="dots" />
                    <br /><br />
                    <h3><b>{T("Loading")}...</b></h3>
                </div>
            </div>
        </motion.div>
    )
}

export default LoadingPage