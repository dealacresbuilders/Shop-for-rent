"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

const PropertyContext = createContext();

const DEFAULT_DOMAIN = "www.shopforrentinfaridabad.com";

export const PropertyProvider = ({ children }) => {

  // ✅ FIXED DOMAIN
  const [domain] = useState(DEFAULT_DOMAIN);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page,setPage]=useState(1);
  const limit=150;
  const [totalItems,setTotalItems]=useState(0)
  // ================= MAIN DOMAIN PROPERTIES =================
  const getPropertiesByDomain = async () => {
    try {
      setLoading(true);
      setError(null);
      // console.log("page =>",page)

      const res = await axios.get(
        `https://faridabad-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}?page=${page}&limit=${limit}`
      );
// console.log("API Response:", res.data);
      setProperties(res.data?.data || []);
      setTotalItems(res.data?.total)
    } catch (err) {
      // lastFetchedDomain.current = null;
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPropertiesByDomain();
  }, [page]);

  // ================= LOCALITY BASED =================
  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [locality, setLocality] = useState(null);

  const decodeSlugWithHyphen = (str) =>
    decodeURIComponent(str).trim().replace(/-/g, " ");

  const fetchPropertiesByLocality = async () => {
    if (!locality) return;

    try {
      setLoading2(true);
      setError2(null);

      const response = await axios.get(
        `https://faridabad-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain}/${decodeSlugWithHyphen(locality)}`
      );

      setData(response?.data?.data || []);
    } catch (err) {
      setError2("Data fetch nahi ho paaya");
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchPropertiesByLocality();
  }, [locality]);

  // *****************************************************************
  // ✅ Areas API Integration
const [areas, setAreas] = useState([]);
const [loadingAreas, setLoadingAreas] = useState(true);
const [errorAreas, setErrorAreas] = useState(null);

const fetchAreas = async () => {
  try {
    setLoadingAreas(true);
    setErrorAreas(null);
    const res = await axios.get(
      "https://faridabad-backend.onrender.com/api/areas/getAllAreas"
    );
    if (res.data && res.data.success) {
      setAreas(res.data.data || []);
    } else {
      setErrorAreas("Failed to fetch areas");
    }
  } catch (err) {
    console.error("Failed to fetch areas:", err);
    setErrorAreas(err.message || "Something went wrong while fetching areas");
  } finally {
    setLoadingAreas(false);
  }
};
useEffect(() => {
  fetchAreas();
}, []);

  // ================= PROVIDER =================
  return (
    <PropertyContext.Provider
      value={{
        properties,
        loading,
        page,setPage,totalItems,itemsPerPage:limit,
        error,areas,
        refetch: getPropertiesByDomain,

        // locality based
        data,
        loading2,
        error2,
        setLocality,
        locality,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

// ================= SAFE HOOK =================
export const useProperty = () => {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperty must be used within PropertyProvider");
  }

  return context;
};