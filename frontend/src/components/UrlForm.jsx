
import { useState } from "react";
import axios from 'axios';

const UrlForm = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("http://localhost:3000/api/create", { url });
            const { link, msg } = data;
            console.log(link);
            console.log(msg);
            setShortUrl(link)
        } catch (err) {
            console.error("Error:", err.response?.data?.message || err.message);
        }
    }

    return (
        <div>
            <input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-pink-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-pink-700 transition">
                {loading ? "Shortening..." : "Shorten URL"}
            </button>

            {shortUrl && (
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
            )}
        </div>
    )
}

export default UrlForm;