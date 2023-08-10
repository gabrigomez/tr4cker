import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";

import { Artists, User } from "../../utils";
import { DashboardTemplate } from "../Templates/DashboardTemplate";
import { getArtistList, getUserArtists } from "../../services/apiService";
import AuthContext from "../../context/AuthContext";

export const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [artists, setArtists] = useState<Artists | null>(null);

  const { username, setUsername, authToken, id } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${authToken}` };

    if (!authToken) {
      navigate("/login");
    }

    async function fetchData() {
      const response = await getUserArtists(id!, headers);
      const data: User = response.data.username;

      try {
        const artistsData = await getArtistList(id!)
        const artistsList: Artists = artistsData.data;
        setArtists(artistsList);
      } catch {
        setArtists(null);
      }

      setUsername(data);
      setLoading(true);
    }

    fetchData();
  }, [authToken, id, navigate, setUsername]);

  return (
    <div className="w-screen">
      <DashboardTemplate loading={loading} artists={artists} username={username} />
    </div>
  );
};
