export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">About This App</h1>
            <p className="text-lg text-gray-700 mb-6">
                This app demonstrates various React concepts and features, including state management, component rendering, and user interaction.
            </p>
            <p className="text-md text-gray-600">
                Explore the components to see how they work together to create a dynamic user experience.
            </p>
        </div>
    );
}