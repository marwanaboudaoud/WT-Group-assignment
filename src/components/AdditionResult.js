
export const AdditionResult = ({ result }) => {
    return (
        <div className="row justify-content-center ms-2">
            <div className="col-6 col-lg-4 d-flex text-center flex-column result-input">
                <label className="mb-2" id="apiResult_label">Result</label>
                <input id="apiResult" value={result} disabled={true} />
            </div>
        </div>
    );
}
