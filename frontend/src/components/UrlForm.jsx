
import { useState } from "react";
import axios from 'axios';

const UrlForm = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);

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

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
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

                    <div className="flex items-center justify-between space-x-2">
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 ml-4 font-medium hover:underline break-all"
                        >
                            {shortUrl}
                        </a>

                        <button
                            onClick={handleCopy}
                            className="px-3 py-1 text-sm text-white bg-gray-500 rounded hover:bg-blue-500 transition"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UrlForm;