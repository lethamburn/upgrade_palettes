import React, { useState, useEffect } from "react";
import getColors from "../../api/fetch_colors";
import "./ColorList.css";

const ColorList = () => {
  useEffect(() => {
    formatColors();
  }, []);

  const [colors, setColors] = useState([]);

  const formatColors = async () => {
    const colordb = await getColors();
    setColors(colordb.data.colors);
  };

  return (
    <div>
      <ul>
        {colors.map((color) => {
          return (
            <li key={JSON.stringify(color)}>
              <div className="colorList">
                <div
                  className="color"
                  style={{ backgroundColor: `${color.hex}` }}
                ></div>
                <h3>{color.name}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorList;
