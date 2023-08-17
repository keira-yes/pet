import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutesConfig } from 'shared/config/appRoutesConfig/appRoutesConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Routes>
                {Object.values(appRoutesConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
