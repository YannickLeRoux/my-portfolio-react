module Main exposing (main)

import Html exposing (Html, div, h1, h2, h6, hr, p, section, span, text)
import Html.Attributes exposing (class)



-- MODEL
-- UPDATE
-- VIEW


main : Html msg
main =
    section []
        [ div [ class "blog-post" ]
            [ div [ class "container" ]
                [ h2 [] [ text "Title" ]
                , h6 [ class "blog-post--category" ] [ text "Category:" ]
                , h6 [ class "blog-post--date" ] [ text "Date:" ]
                ]
            , div [ class "container" ]
                [ hr [] []
                , div []
                    [ p [ class "blog-post--excerpt" ] [ text "This is the exerpt" ]
                    , span [] [ text "..." ]
                    , p [ class "text-mute text-right" ] [ text "Read more plus add icon" ]
                    ]
                ]
            ]
        ]



--  <div className="blog-post">
--     <div className="container">
--       <Link to={`blog/${id}`} className="blog-post--title">
--         <h2>{title}</h2>
--       </Link>
--       <h6 className="blog-post--category">Category: {category}</h6>
--       <h6 className="blog-post--date">Date: {formatDate(date)}</h6>
--     </div>
--     <div className="container">
--       <hr />
--       <div>
--         <p className="blog-post--excerpt">
--           {content.markdown}
--           <span>...</span>
--         </p>
--         <Link className="text-mute text-right" to={`blog/${slug}`}>
--           <FontAwesomeIcon icon={faArrowCircleRight} /> Read more...
--         </Link>
--       </div>
--     </div>
--   </div>
