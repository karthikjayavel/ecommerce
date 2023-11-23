import Skeleton from "react-loading-skeleton";

function Loading(){
    return(
        <>
        <div className="col-md-3">
            <Skeleton height={250} />
        </div>
        <div className="col-md-3">
            <Skeleton height={250} />
        </div>
        <div className="col-md-3">
            <Skeleton height={250} />
        </div>
        <div className="col-md-3">
            <Skeleton height={250} />
        </div>
    </>
    );
}
export default Loading;