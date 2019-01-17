import { connect } from "react-redux";
import { get, findIndex, xor } from "lodash";
import { compose, withState, withProps, withHandlers, withPropsOnChange, lifecycle } from "recompose";
import { getCourses } from "../../redux/actions/courses";
import { getCategories } from "../../redux/actions/categories";
import { getVerticals } from "../../redux/actions/verticals";
import View from "./view";
export default compose(
    connect(
        ({
            courses,
            categories,
            verticals
        }: any) => ({
            courses,
            categories,
            verticals
        }),
        {
            getCourses,
            getCategories,
            getVerticals
        }
    ),
    withState('isOpenModal', 'setIsOpenModal', false),
    withState('selectedVerticals', 'setSelectedVerticals', []),
    withState('selectedCategories', 'setSelectedCategories', []),
    withState('selectedCourses', 'setSelectedCourses', []),
    withState('listCategories', 'setListCategories', []),
    withState('listCourses', 'setListCourses', []),
    withState('selectedCoursesData', 'setSelectedCoursesData', []),
    withProps((props: any) => ({
        listVerticals: get(props, "verticals.list", [])
    })),
    withHandlers({
        onSelectedVertical: ({
            selectedVerticals,
            setSelectedVerticals
        }: any) => (id: number) => {
            const selected = xor(selectedVerticals, [id]);
            setSelectedVerticals(selected);
        },
        onSelectedCategory: ({
            selectedCategories,
            setSelectedCategories
        }: any) => (id: number) => {
            const selected = xor(selectedCategories, [id]);
            setSelectedCategories(selected);
        },
        onSelectedCourse: ({
            selectedCourses,
            setSelectedCourses
        }: any) => (id: number) => {
            const selected = xor(selectedCourses, [id]);
            setSelectedCourses(selected);
        },
        onStart: ({
            setIsOpenModal,
            selectedCourses,
            setSelectedCourses,
            listCourses
        }: any) => () => {
            const list = selectedCourses.filter((selected: number) => findIndex(listCourses, (item: any) => item.Id === selected) !== -1);
            setSelectedCourses(list);
            setIsOpenModal(true);
        },
        onReset: ({
            setSelectedVerticals,
            setSelectedCategories,
            setSelectedCourses
        }: any) => () => {
            setSelectedVerticals([]);
            setSelectedCategories([]);
            setSelectedCourses([]);
        }
    }),
    withPropsOnChange(['selectedVerticals'], ({
        selectedVerticals,
        setListCategories,
        categories
    }: any) => {
        const listCategories = (categories.list || []).filter((category: any) => selectedVerticals.includes(category.Verticals));
        setListCategories(listCategories);
    }),
    withPropsOnChange(['selectedCategories'], ({
        selectedCategories,
        setListCourses,
        courses
    }: any) => {
        const listCourses = (courses.list || []).filter((course: any) => selectedCategories.includes(course.Categories));
        setListCourses(listCourses);
    }),
    withPropsOnChange(['selectedCourses'], ({
        selectedCourses,
        setSelectedCoursesData,
        courses
    }: any) => {
        const listCourses = (courses.list || []).filter((course: any) => selectedCourses.includes(course.Id));
        setSelectedCoursesData(listCourses);
    }),
    withPropsOnChange(['listCategories'], ({
        listCategories,
        listCourses,
        setListCourses,
        selectedCategories,
        setSelectedCategories,
        setSelectedCourses
    }: any) => {
        const list = listCourses.filter((course: any) => findIndex(listCategories, (item: any) => item.Id === course.Category) !== -1);
        setListCourses(list);

        const listSelectedCategories = selectedCategories.filter((selected: number) => findIndex(listCategories, (item: any) => item.Id === selected) !== -1);
        setSelectedCategories(listSelectedCategories);
        if (listSelectedCategories.length === 0) {
            setSelectedCourses([]);
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.getCourses();
            this.props.getCategories();
            this.props.getVerticals();
        }
    })
)(View)