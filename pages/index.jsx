import Layout from '../components/layout/Layout';
import Home from '../components/content/Home';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { toast } from 'react-toastify'

function HomePage() {
  const { success, message } = useSelector(state => state.user) //

  //Update Profile Success
  useEffect(() => {
    if (success) {
      (toast.success(message))
    }
  }, [success, message])


  return (
    <Layout
      title="WebSite | HomePage"
      description="this is the Homepage of the website"
    >
      <Home />
      {/* <=============== SCROLL UP ===============--> */}
      <Link href="/">
        <a className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-fill scrollup__icon"></i>
        </a>
      </Link>
    </Layout>

  );
}

export default HomePage;