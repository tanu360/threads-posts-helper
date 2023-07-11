const threads = {
    charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_', // Character set used for encoding and decoding
    encode: (id) => {
        let result = ''; // Variable to store the encoded result
        let remainder;
        id = BigInt(id.toString()); // Convert the input ID to a BigInt
        while (id > 0) {
            remainder = Number(id % 64n); // Calculate the remainder by dividing the ID by 64 as a BigInt
            result = threads.charset[remainder] + result; // Prepend the corresponding character to the result
            id /= 64n; // Update the ID by dividing it by 64 as a BigInt
        }
        return result;
    },
    decode: (url) => {
        let result = 0n; // Variable to store the decoded result as a BigInt
        let power = 1n; // Variable to calculate the power of 64
        for (let i = url.length - 1; i >= 0; i--) {
            const char = url[i]; // Get each character from the URL
            const index = threads.charset.indexOf(char); // Find the index of the character in the character set
            result += BigInt(index) * power; // Add the value of the character multiplied by the power of 64 to the result
            power *= 64n; // Multiply the power by 64
        }
        return result.toString(); // Convert the result back to a string
    },

    getPostUrl: (id) => `https://www.threads.net/t/${threads.encode(id)}/`, // Generate a post URL using the encoded ID
    getPostID: (url) => {
        try {
            const formatUrl = url.match(/(?<=\/t\/).*/g)[0].replace(/\/.*/g, ''); // Extract the formatted URL from the input URL
            return threads.decode(formatUrl); // Decode the formatted URL to get the original post ID
        } catch (error) {
            console.log('Error Found: Invalid link Detected.', error);
            return 'Invalid Link'; // Return an error message if the link is invalid
        }
    }
};
