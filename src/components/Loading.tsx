import styled from "@emotion/styled"

export const Loading = () => {
  return (
    <LoadingBox>
      <img
        src="/images/loading.png"
        alt="Loading"
      />
      <p>Loading...</p>
    </LoadingBox>
  )
}


const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15em;
    height: 15em;
  }

  p {
    margin: 0;
    font-size: 3em;
    font-weight: bold;
  }
`