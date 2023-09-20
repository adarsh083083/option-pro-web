import DataTable from "./SingleTable"
const ShowData = ({ val_key, data, data_key }) => {

    // console.log(key)
    return (
        <div>
            {data_key.map(k => (

                <DataTable
                val_key={val_key}
                    data={data[k]}
                    heading={k}
                />
            ))}
        </div>
    )
}
export default ShowData