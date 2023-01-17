from setuptools import setup
  
setup(
    name='liquibook-lib',
    version='0.1',
    description='Liquibook Library',
    author='Eric Newhuis',
    author_email='freewill@librem.one',
    packages=['python'],
    install_requires=[
        'protobuf',
    ],
)