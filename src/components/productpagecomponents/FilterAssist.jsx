import Header3 from "../../utilities/header3";
import Header4 from "../../utilities/Header4";
import Paragraph from "../../utilities/Paragraph";
import style from "./FilterAssist.module.css";

function FilterAssist() {
  return (
    <section className={style.filterassist}>
      <div className={style.filterassist_cont}>
        <div className={style.first_cont}>
          <Header3>Get all you need</Header3>
        </div>
        <form className={style.second_cont}>
          <input placeholder="Search Available Products" name="search" />
          <button type="submit">
            <Paragraph>Search</Paragraph>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FilterAssist;
