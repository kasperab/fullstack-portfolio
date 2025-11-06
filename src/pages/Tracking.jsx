import english from "./img/tracking-english.png";
import swedish from "./img/tracking-swedish.png";

export default function Tracking() {
    return (
        <div>
            <h3 className="text-center">Package Tracking</h3>
            <br />
            <p>
                <a href="https://kasperab.github.io/package-tracking" target="_blank">View website</a>
                <br />
                <a href="https://github.com/kasperab/package-tracking" target="_blank">View source code</a>
            </p>
            <p>
                Website that fetches tracking data from a JSON API and displays it in a table.
                Made using <a href="https://react.dev" target="_blank">React</a>.
            </p>
            <img src={english} alt="Package Tracking in English" className="w-100" />
            <br /><br />
            <p>
                There is support for multiple languages.
            </p>
            <img src={swedish} alt="Package Tracking in Swedish" className="w-100" />
        </div>
    );
}