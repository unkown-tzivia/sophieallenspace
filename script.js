document.addEventListener('DOMContentLoaded', () => {
    const randomChar = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    const animateText = (element, text, interval, duration, callback) => {
        let index = 0;
        const spans = [];

        const revealNextCharacter = () => {
            const char = text[index];
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
            spans.push(span);

            const originalChar = span.textContent;
            let iteration = 0;

            const charIntervalId = setInterval(() => {
                span.textContent = randomChar();
                iteration++;

                if (iteration > duration) {
                    clearInterval(charIntervalId);
                    span.textContent = originalChar;
                    index++;

                    if (index < text.length) {
                        revealNextCharacter();
                    } else {
                        if (callback) {
                            callback();
                        }
                    }
                }
            }, interval);
        };

        revealNextCharacter();
    };

    animateText(document.getElementById('sophie'), 'sophie', 30, 5, () => {
        animateText(document.getElementById('allen'), 'allen', 33, 5);
    });
});
