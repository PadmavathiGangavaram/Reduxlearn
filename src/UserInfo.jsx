import { useSelector } from "react-redux"
export default function UserInfo() {
    let data = useSelector(state => state.user) 
    return (
        <div>
            <h1>{data.username}, {data.balance}</h1>
        </div>
    )
}