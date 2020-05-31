module Post exposing (Post, main)

import Browser
import Date exposing (fromIsoString)
import Debug exposing (log)
import Html exposing (Html, article, div, h1, h2, h3, h6, hr, p, section, span, text)
import Html.Attributes exposing (class, style)
import Http
import Json.Decode as Decode exposing (Decoder, int, string)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode exposing (Value)
import Markdown exposing (..)
import Time exposing (Month(..), Weekday(..))



-- INIT


type alias Model =
    { state : State
    , post : {}
    }


type alias Post =
    { title : String
    , id : Int
    , subtitle : String
    , slug : String
    , tags : String
    , createdAt : String
    , updatedAt : String
    , content : String
    }


type State
    = Failure
    | Loading
    | Success Post


type Flags
    = Flags String



-- TODO see if I can validate the flags id as a valid string


init : String -> ( Model, Cmd Msg )
init id =
    ( { state = Loading, post = {} }
    , getPost id
    )



-- UPDATE


type Msg
    = GotPost (Result Http.Error Post)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotPost (Ok post) ->
            ( { model | state = Success post }, Cmd.none )

        GotPost error ->
            ( { model | state = Failure }, Cmd.none )



--TODO handle different error types, see the song db code
-- VIEW


view : Model -> Html msg
view model =
    case model.state of
        Loading ->
            viewLoading

        Failure ->
            viewFailure

        Success post ->
            viewSuccess post


viewLoading : Html msg
viewLoading =
    text "Loading..."


viewFailure : Html msg
viewFailure =
    text "Looks like there was an error!"


viewSuccess : Post -> Html msg
viewSuccess post =
    article [ class "blog" ]
        [ div [ class "blog-post" ]
            [ div
                [ class "container" ]
                [ h2 [ class "blog-post--title" ]
                    [ text post.title ]
                , h6
                    [ class "blog-post--category text-muted" ]
                    [ viewTags post.tags ]
                , h6
                    [ class "blog-post--date text-muted" ]
                    [ text ("Published: " ++ post.createdAt) ]
                ]
            , div
                [ class "container" ]
                [ div [] <|
                    toHtml Nothing post.content
                ]
            ]
        ]


viewTags : String -> Html msg
viewTags tags =
    let
        tagList =
            String.split "," tags
    in
    div [ style "display" "flex" ] (List.map viewOneTag tagList)


viewOneTag : String -> Html msg
viewOneTag tag =
    h3 []
        [ span [ class "badge badge-info", style "margin-right" "8px" ] [ text tag ]
        ]



-- HTTP


getPost : String -> Cmd Msg
getPost id =
    let
        url =
            "https://portfolio-blog-api-971.herokuapp.com/posts/" ++ id
    in
    Http.get
        { url = url
        , expect = Http.expectJson GotPost postDecoder
        }


postDecoder : Decoder Post
postDecoder =
    Decode.succeed Post
        |> required "title" string
        |> required "id" int
        |> optional "subtitle" string ""
        |> required "slug" string
        |> required "tags" string
        |> required "created_at" string
        |> optional "updated_at" string ""
        |> required "content" string



-- decodeIdFromJS : Value -> Msg
-- decodeIdFromJS id =
--     let
--         result =
--             Decode.decodeValue Decode.string x
--     in
--     case result of
--         Ok stringId ->
--             UpdatePost stringId
--         Err _ ->
--             "err"
-- MAIN


main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
