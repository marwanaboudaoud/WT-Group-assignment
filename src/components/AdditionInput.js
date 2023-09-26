
export const AdditionInput = ({ label, id, value, onChange }) => {
    return (
        <div className="col-6 input-container mb-4">
            <label className="mb-2" id={`${id}_label`}>{label}</label>
            <input id={id} value={value} onChange={onChange} />
        </div>
    )
}
