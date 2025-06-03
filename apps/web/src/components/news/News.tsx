import type { NewsUpdateEntity } from "lgs-zod-dto";

type NewsProps = {
  data: NewsUpdateEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function News(props: NewsProps) {
  const { data, ...rest } = props;
  return (
    <div {...rest}>
      <h2>News</h2>
      {data.filter((newsUpdate) => newsUpdate.published).length > 0 ? (
        data
          .filter((newsUpdate) => newsUpdate.published)
          .map((newsUpdate) => (
            <article key={`news-update${newsUpdate.id.toString()}`}>
              <h3>{newsUpdate.title}</h3>
              <p>{newsUpdate.content}</p>
            </article>
          ))
      ) : (
        <p>No news right now. Check back soon!</p>
      )}
    </div>
  );
}
