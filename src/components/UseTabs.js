"use client" 
import { useState } from 'react';

const UseTabs = (initialTab = 0) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return { activeTab, changeTab };
};

export default UseTabs;