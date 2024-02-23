async function takeTime() {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 3000);
    });
}

const AboutPage = async () => {
    await takeTime();
    return (
        <div>
            AboutPage
        </div>
    );
};

export default AboutPage;