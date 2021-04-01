import styled, { keyframes } from 'styled-components';

const Loading = () => {
    return (
        <LoadingBox>
            <SLoading />
        </LoadingBox>
    )
}

export default Loading;


const LoadingBox = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const SpinLoading = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`
const SLoading = styled.div`
    border: 5px solid #f3f3f3; 
    border-top: 5px solid #3498db; 
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: ${SpinLoading} 2s linear infinite;
`