import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => (
    <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent
        to-black sm:h-48 h-28">
            <div className="absolute inset-0 flex items-center">
                <img
                    alt="art"
                    src={artistId ? artistData?.artists[artistId].
                        attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
                        : songData?.images?.coverart}
                    className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover
                    border-2 shadow-xl shadow-black"

                />

            </div>
        </div>

    </div>
);

export default DetailsHeader;
