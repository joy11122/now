"use client"
import React, { useEffect } from 'react';
import '@/public/css/bootstrap.min.css';

const InstallBootstrap = () => {
  useEffect(() => {
   
    import('@/public/js/bootstrap.bundle.js')
      .then(() => {
        console.log('Bootstrap bundle loaded');
      })
      .catch(err => {
        console.error('Error loading Bootstrap bundle', err);
      });
  }, []);

  return (
    <></>
)
};

export default InstallBootstrap;

