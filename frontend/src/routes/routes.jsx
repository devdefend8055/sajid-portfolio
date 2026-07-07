import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/site/Home';
import NotFound from '../components/site/NotFound';
import ProjectsPage from '../pages/site/projects/ProjectsPage';

const router = () =>
    createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    {/* <Route path="/thank-you" element={<ThankYou />} /> */}
                    <Route path="*" element={<NotFound />} />
                    <Route path="/projects/:slug" element={<ProjectsPage />} />
                </Route>
            </>
        )
    );

export default router