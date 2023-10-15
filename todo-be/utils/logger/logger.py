import logging
import os
from datetime import datetime, timezone
from logging import Handler, Formatter, Logger


def setup_console_root_logger() -> Logger:
    return _setup_logging(logging.StreamHandler())


def _setup_logging(handler: Handler) -> Logger:
    logger = logging.getLogger()
    if not len(logger.handlers):
        formatter = _setup_log_formatter()
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        _set_log_level(logger)
        logger.info(f"root logging initialised at UTC {datetime.now(timezone.utc)}")
    return logger


def _set_log_level(logger: Logger) -> None:
    log_level_mapping = {
        "info": logging.INFO,
        "debug": logging.DEBUG,
    }
    log_level = os.getenv("LOG_LEVEL", default="info")
    logger.setLevel(log_level_mapping[log_level])


def _setup_log_formatter() -> Formatter:
    format_str: str = "%(asctime)s level=%(levelname)s process_id=%(process)d thread_id=%(thread)d " \
                      + "logger=%(name)s module=%(module)s line=%(lineno)d file=%(filename)s func=%(funcName)s " \
                      + "message=\"%(message)s\""
    formatter: Formatter = logging.Formatter(format_str, "%Y-%m-%dT%H:%M:%S%z")
    return formatter
