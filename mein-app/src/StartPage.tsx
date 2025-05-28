import WindowSizeTracker from "./components/Task_3/WindowSizeTracker.tsx";
import ToggleBoxContainer from "./components/Task_2/ToggleBoxContainer.tsx";
import CounterController from "./components/Task_1/CounterController.tsx";

export default function StartPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto space-y-10">
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Task 1: Visualize Component Re-renders</h2>
                    <CounterController />
                </section>

                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Task 2: Scoped State</h2>
                    <ToggleBoxContainer />
                </section>

                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Task 3: Track Window Width</h2>
                    <WindowSizeTracker />
                </section>
            </div>
        </div>
    );
}