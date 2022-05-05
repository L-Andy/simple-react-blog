import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Input = styled.input`
    padding: 12px 30px;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colorWhite};
`

const StyledSearchInput = styled.div`
    display: flex;
    padding: 6px 20px;
    align-items: center;
    background-color : inherit;
    color: ${({ theme }) => theme.colorWhite};
    & input {
        border: none;
        padding-left: 20px;
        outline: none;
        background-color : inherit;
        color: ${({ theme }) => theme.colorGrey100};;
        height: 30px;
    }
`

export const SearchInput = () => <StyledSearchInput>
    <div>
        <FontAwesomeIcon icon={faSearch} color="grey" />
    </div>
    <input type='text' placeholder='Search ' />
</StyledSearchInput>