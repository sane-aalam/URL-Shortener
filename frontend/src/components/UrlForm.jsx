
import { useState } from "react";

const UrlForm = () => {
    const [loading, setLoading] = useState(false);
    const [originalUrl, setOriginalUrl] = useState("http//www.google.com");
    return (
        <form>
            <input
                type="url"
                placeholder="Enter a long URL..."
                value={originalUrl}
                onChange={(event) => setOriginalUrl(event.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button className="w-full bg-pink-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-pink-700 transition">
                {loading ? "Shortening..." : "Shorten URL"}
            </button>

            {/* {shortUrl && (
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-2">Here's your short URL:</p>
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            {shortUrl}
                        </a>
                    </div>
                )} */}
        </form>
    )
}

export default UrlForm;