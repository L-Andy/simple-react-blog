import styled from 'styled-components';

export const CategoryCard = styled.div.attrs({ className: 'w3-card w3-mobile' })`
    background-color: ${({ theme }) => theme.colorWhite};
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    height: 280px;
    margin-bottom: 20px;
    & > div {
        height: 50%;
    }
    & > div:first-child {
        & img {
            height: 100%;
            width: 100%;
        }
    }
`

export const ArticleCard = styled.div`
background-color: ${({ theme }) => theme.colorWhite};
    border-radius: 8px;
    width: 100%;
    height: 320px;
    margin: 0 5px 20px 0;
padding: 0;
& > div:first-child {
    height: 60%;
    & img {
            height: 100%;
            width: 100%;
            border-radius: 8px 8px 0 0;
        }
}
& > div:nth-child(2n) {
    padding: 20px 0;
    height: 20%;
}
& > div:last-child {
    height: 20%;
    display: flex;
    flex-direction: row;
    & > div {
        height: 100%;
    }
    & > div:first-child {
        flex: 0.3;
        display: flex;
        justify-content: center;
        & img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }
    }
    & > div:last-child {
        flex: 0.7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & label {
            color: ${({ theme }) => theme.colorGrey100};
        }
    }
}
`