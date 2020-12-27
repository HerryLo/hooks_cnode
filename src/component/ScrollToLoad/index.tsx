import * as React from 'react';
import PropTypes from 'prop-types';
interface IProp {
    useBodyScroll?: any
    children?: React.ReactElement
    disableScroll?: boolean
    toBottomHeight?: number
    loadNext: () => void
    disable?: boolean
    loading: boolean
    className?: string
}

export default function ScrollToLoad(props: IProp): React.ReactElement {
    const { children, className, useBodyScroll } = props;
    const classStyle = `comp-scroll-to-load ${className} ${useBodyScroll ? 'BodyScroll' : ''}`;
    let scrollContainer: any = null;

    React.useEffect(() => {
        const { useBodyScroll } = props
        if(useBodyScroll){
            window.addEventListener('scroll', onBodyScroll)
        }
        return () => {
            window.removeEventListener('scroll', onBodyScroll)
        }
    }, [])
    
    const onBodyScroll = () => {
        if (props.disable || props.loading) { return }

        //获取滚动条当前的位置
        function getScrollTop() {
            let scrollTop = 0;
            if(document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if(document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        }

        //获取当前可视范围的高度
        function getClientHeight() {
            let clientHeight = 0;
            if(document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
            } else {
                clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            return clientHeight;
        }

        //获取文档完整的高度
        function getScrollHeight() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }

        const {
            toBottomHeight,
            loadNext,
        } = props;

        const distanceScrollCount = getScrollHeight(),
            distanceScroll = getScrollTop(),
            topicPageHight = getClientHeight(),
            ddt = distanceScrollCount - distanceScroll - topicPageHight;
        let defaultToBottomHeight = 3;
        if (toBottomHeight) {
            defaultToBottomHeight = toBottomHeight;
        }

        // 处理model弹窗问题导致分页钩子触发, 当弹窗被唤起时会导致ddt值等于0, 直接触发下拉回调事件, 所以必须return
        if (distanceScroll === 0 || distanceScrollCount === topicPageHight) {
            return
        }
        if (ddt < defaultToBottomHeight) {
            loadNext();
        }
    }

    const onScroll = (e: any) => {
        if (props.disable || props.loading || props.useBodyScroll) { return }

        const {
            toBottomHeight,
            loadNext,
        } = props;

        const event = e || window.event;
        const el = event.target;

        const distanceScrollCount = el.scrollHeight,
            distanceScroll = el.scrollTop,
            topicPageHight = el.clientHeight,
            ddt = distanceScrollCount - distanceScroll - topicPageHight;
        let defaultToBottomHeight = 3;

        const scrollContainerBoundingRect = scrollContainer.getBoundingClientRect();

        //在滚动的时候自定义操作
        /**
         * @param e 事件对象
         * @param distanceScroll 滚动的距离
         * @param distanceScrollCount 总高度
         * @param scrollHeight 节点的滚动高度
         * 在判断是否正在加载和是否无更多数据之前执行的原因是
         * 在无更多数据不做加载操作还能做自定义的操作
         */
        // if (props.scrollToDo) {
        //     props.scrollToDo(e, distanceScroll, topicPageHight, distanceScrollCount, scrollContainerBoundingRect);
        // }

        // if (props.dispatchCustomEvent) {
        //     window.dispatchEvent(new CustomEvent('COMP_SCROLL_TO_LOAD/SCROLL', { detail: { e } }))
        // }
        // 添加noneOne的判断
        if (props.loading) {
            return;
        }

        // 防止事件冒泡（子元素横向滚动也会触发onscroll事件）
        if (Array.prototype.join.call(el.classList, ',').indexOf('comp-scroll-to-load') < 0) {
            return;
        }

        if (toBottomHeight) {
            defaultToBottomHeight = toBottomHeight;
        }

        if (ddt < defaultToBottomHeight) {
            loadNext();
        }
    }

    const disableScrollFnc = (e: any) => {
        if (props.disableScroll) {
            e.preventDefault();
        }
    }

    return (
        <div
            className={classStyle}
            onScroll={onScroll}
            onTouchMove={disableScrollFnc}
            onWheel={disableScrollFnc}
            ref={(el) => (scrollContainer = el)}
        >
            <main>
                {children}
            </main>
        </div>
    )
}

ScrollToLoad.propTypes = {
    // 是否禁用滚动
    disableScroll: PropTypes.bool,

    // 滚动到底部时调用
    loadNext: PropTypes.func.isRequired,

    // 禁止触发滚动加载事件
    disable: PropTypes.bool,

    // 距离底部多少时触发
    toBottomHeight: PropTypes.number,

    loading: PropTypes.bool,

    className:  PropTypes.string
}