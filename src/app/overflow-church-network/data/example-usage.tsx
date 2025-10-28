/**
 * Example Usage of the New Centralized Data System
 * 
 * This file shows how to use the new data system in your components.
 * Copy these patterns to update your existing components.
 */

import React from 'react';
import { ChurchData, getCampusById, getSmallGroupsByCampus } from './data-provider';

// Example: Homepage Component
export const HomepageExample = () => {
  // Access all church data
  const churchInfo = ChurchData.info;
  const campuses = ChurchData.campuses;
  const recentMessages = ChurchData.messages;

  return (
    <div>
      <h1>{churchInfo.name}</h1>
      <p>{churchInfo.tagline}</p>
      
      {/* Display campuses */}
      {campuses.map(campus => (
        <div key={campus.id}>
          <h3>{campus.name}</h3>
          <p>{campus.address}, {campus.city}, {campus.state}</p>
          <p>{campus.phone}</p>
        </div>
      ))}
      
      {/* Display recent messages */}
      {recentMessages.map(message => (
        <div key={message.title}>
          <h4>{message.title}</h4>
          <p>By {message.speaker}</p>
          <p>{message.date}</p>
        </div>
      ))}
    </div>
  );
};

// Example: Campus Selector Component
export const CampusSelectorExample = () => {
  const [selectedCampusId, setSelectedCampusId] = React.useState('mars-central');
  
  // Get the selected campus using the helper function
  const selectedCampus = getCampusById(selectedCampusId);
  
  return (
    <div>
      <select 
        value={selectedCampusId} 
        onChange={(e) => setSelectedCampusId(e.target.value)}
      >
        {ChurchData.campuses.map(campus => (
          <option key={campus.id} value={campus.id}>
            {campus.name}
          </option>
        ))}
      </select>
      
      {selectedCampus && (
        <div>
          <h3>{selectedCampus.name}</h3>
          <p>{selectedCampus.address}</p>
          <p>{selectedCampus.phone}</p>
          <p>Pastor: {selectedCampus.pastor.name}</p>
        </div>
      )}
    </div>
  );
};

// Example: Small Groups Component
export const SmallGroupsExample = () => {
  const [selectedCampus, setSelectedCampus] = React.useState('Mars Central');
  
  // Get small groups for the selected campus
  const campusGroups = getSmallGroupsByCampus(selectedCampus);
  
  return (
    <div>
      <select 
        value={selectedCampus} 
        onChange={(e) => setSelectedCampus(e.target.value)}
      >
        {ChurchData.campuses.map(campus => (
          <option key={campus.id} value={campus.name}>
            {campus.name}
          </option>
        ))}
      </select>
      
      <div>
        {campusGroups.map(group => (
          <div key={group.id}>
            <h4>{group.name}</h4>
            <p>Leader: {group.leader}</p>
            <p>Day: {group.day} at {group.time}</p>
            <p>{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example: Contact Information Component
export const ContactInfoExample = () => {
  const contactInfo = ChurchData.contact;
  const leadPastor = ChurchData.leadPastor;
  
  return (
    <div>
      <h3>Contact Information</h3>
      <p>{contactInfo.mainOffice.address}</p>
      <p>Phone: {contactInfo.mainOffice.phone}</p>
      <p>Email: {contactInfo.mainOffice.email}</p>
      
      <h4>Lead Pastor</h4>
      <p>{leadPastor.name}</p>
      <p>{leadPastor.title}</p>
      <p>Email: {leadPastor.email}</p>
      <p>Phone: {leadPastor.phone}</p>
    </div>
  );
};

// Example: Service Times Component
export const ServiceTimesExample = () => {
  const serviceTimes = ChurchData.serviceTimes;
  
  return (
    <div>
      <h3>Service Times</h3>
      {serviceTimes.map(service => (
        <div key={service.name}>
          <h4>{service.name}</h4>
          <p>{service.address}</p>
          <p>Times: {service.time}</p>
        </div>
      ))}
    </div>
  );
};
